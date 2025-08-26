import sys, os
import pytest

# Add backend/ to PYTHONPATH
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import pytest
from app import app

@pytest.fixture
def client():
    # Flask provides a test client for simulating requests
    with app.test_client() as client:
        yield client

def test_home_status(client):
    """Check if home page loads successfully"""
    response = client.get("/")
    assert response.status_code == 200
    assert b"DevOps Implementation Project" in response.data  # check title is present

def test_message_endpoint(client):
    """Check if /message returns JSON correctly"""
    response = client.get("/message")
    assert response.status_code == 200
    json_data = response.get_json()
    assert "message" in json_data
    assert json_data["message"] == "Hello from Flask backend!"

def test_invalid_route(client):
    """Check if invalid route gives 404"""
    response = client.get("/invalid")
    assert response.status_code == 404
