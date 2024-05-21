# eh i dont remember why i wrote this, that's not what we're supposed to built tho

import vertexai
from vertexai.generative_models import GenerativeModel

project_id = "afterschool125"

vertexai.init(project=project_id, location="us-central1")

model = GenerativeModel(model_name="gemini-1.0-pro-002")

response = model.generate_content(
    "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?"
)

print(response.text)