from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn import preprocessing

app = Flask(__name__)
CORS(app)

# Load the training data
training = pd.read_csv('Data/Training.csv')
cols = training.columns[:-1]
x = training[cols]
y = training['prognosis']

# Encode labels
le = preprocessing.LabelEncoder()
le.fit(y)
y = le.transform(y)

# Train the model
clf = DecisionTreeClassifier()
clf.fit(x, y)

# Load metadata
description_list = pd.read_csv('MasterData/symptom_Description.csv', index_col=0, squeeze=True).to_dict()
precautionDictionary = pd.read_csv('MasterData/symptom_precaution.csv', index_col=0).T.to_dict()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symptoms = data.get("symptoms", [])

    # Prepare input vector
    input_vector = np.zeros(len(cols))
    for symptom in symptoms:
        if symptom in cols:
            input_vector[cols.get_loc(symptom)] = 1

    # Predict disease
    prediction = clf.predict([input_vector])
    disease = le.inverse_transform(prediction)[0]

    # Fetch disease description and precautions
    description = description_list.get(disease, "No description available")
    precautions = precautionDictionary.get(disease, ["No precautions available"])

    return jsonify({
        "disease": disease,
        "description": description,
        "precautions": precautions
    })

if __name__ == '__main__':
    app.run(debug=True)
