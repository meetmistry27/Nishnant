from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import csv

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with the backend

# Load and prepare data
training = pd.read_csv('Data/Training.csv')
cols = training.columns[:-1]
x = training[cols]
y = training['prognosis']

# Train the decision tree model
clf = DecisionTreeClassifier()
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=20)
clf.fit(x_train, y_train)

# Load symptom descriptions and precautions
description_dict = {}
precaution_dict = {}

with open('MasterData/symptom_Description.csv') as csv_file:
    csv_reader = csv.reader(csv_file)
    for row in csv_reader:
        description_dict[row[0]] = row[1]

with open('MasterData/symptom_precaution.csv') as csv_file:
    csv_reader = csv.reader(csv_file)
    for row in csv_reader:
        precaution_dict[row[0]] = [row[1], row[2], row[3], row[4]]

# Convert symptoms to vector format for prediction
def predict_disease(symptoms_list):
    input_vector = np.zeros(len(cols))
    for symptom in symptoms_list:
        if symptom in cols:
            index = cols.get_loc(symptom)
            input_vector[index] = 1

    predicted_disease = clf.predict([input_vector])[0]
    return predicted_disease

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    symptoms = data.get("message", "").split(", ")  # Expect comma-separated symptoms

    if not symptoms:
        return jsonify({"reply": "Please provide symptoms."}), 400

    disease = predict_disease(symptoms)
    description = description_dict.get(disease, "No description available.")
    precautions = precaution_dict.get(disease, ["No precautions available."])

    response = {
        "disease": disease,
        "description": description,
        "precautions": precautions
    }
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
