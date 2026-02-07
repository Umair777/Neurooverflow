from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend running 🚀"}

@app.get("/api/questions")
def get_questions():
    return [
        {"id": 1, "title": "What is React?", "answers": 2},
        {"id": 2, "title": "What is FastAPI?", "answers": 1},
    ]
