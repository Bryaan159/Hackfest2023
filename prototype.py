import  nltk 
from nltk.stem.lancaster import LancasterStemmer

stemmer  = LancasterStemmer()
import numpy
import tflearn
import tensorflow as tf
import json
import random
import pickle

with open("contentJson.json") as file:
    data = json.load(file)

print(data)