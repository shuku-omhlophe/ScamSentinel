import os
import pickle
import re
import joblib
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Ensure necessary NLTK resources are available
nltk.download("punkt")
nltk.download("stopwords")

# Load English stopwords
STOPWORDS = set(stopwords.words("english"))

# Paths for model persistence
MODEL_PATH = os.path.join(os.path.dirname(__file__), "scam_model.pkl")

# Sample scam-related keywords (expand this with real blockchain data)
SCAM_KEYWORDS = ["rugpull", "honeypot", "exit scam", "malicious", "phishing", "fake", "steal", "drain"]

# Preprocessing function for contract text
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r"[^\w\s]", "", text)  # Remove punctuation
    tokens = word_tokenize(text)
    tokens = [word for word in tokens if word not in STOPWORDS]  # Remove stopwords
    return " ".join(tokens)

# Sample training data (replace with real blockchain-labeled data)
TRAINING_DATA = [
    ("This contract has a backdoor function allowing owner to drain funds", 1),  # Scam
    ("A safe and audited smart contract with secure transactions", 0),  # Legit
    ("Honeypot detected: users cannot withdraw funds after deposit", 1),
    ("Verified contract following ERC-20 standards", 0)
]

# Extract text and labels
X_train, y_train = zip(*[(preprocess_text(text), label) for text, label in TRAINING_DATA])

# Define ML pipeline
pipeline = Pipeline([
    ("tfidf", TfidfVectorizer()),  # Convert text to numerical features
    ("classifier", LogisticRegression())  # Train a logistic regression model
])

# Train and save the model
def train_model():
    pipeline.fit(X_train, y_train)
    joblib.dump(pipeline, MODEL_PATH)
    print("✅ Scam detection model trained and saved!")

# Load or retrain model
def load_model():
    if os.path.exists(MODEL_PATH):
        return joblib.load(MODEL_PATH)
    else:
        train_model()
        return joblib.load(MODEL_PATH)

# Predict scam probability
def predict_scam(contract_text):
    model = load_model()
    processed_text = preprocess_text(contract_text)
    prediction = model.predict([processed_text])[0]
    probability = model.predict_proba([processed_text])[0][1]  # Scam probability
    return {"is_scam": bool(prediction), "scam_probability": round(probability, 2)}

# Example Usage
if __name__ == "__main__":
    train_model()  # Train on startup
    sample_text = "This contract is a honeypot where withdrawals are blocked."
    result = predict_scam(sample_text)
    print(f"Prediction: {result}")
