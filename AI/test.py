# Import libraries
from google.cloud import dialogflow_v2beta1

# Replace with your agent's project ID and location
project_id = "afterschool125"
location = "us-central1"

# Create a session client
session_client = dialogflow_v2beta1.SessionsClient()

# Define the session path
session_path = session_client.session_path(project_id, location, "your-session-id")

# Craft your text prompt
text_input = dialogflow_v2beta1.TextInput(text="your prompt")

# Send prompt and get response
query_input = dialogflow_v2beta1.QueryInput(text=text_input)
response = session_client.detect_intent(session_path, query_input)

# Access and display the generated text
print(f"Agent Response: {response.query_result.fulfillment_text}")

