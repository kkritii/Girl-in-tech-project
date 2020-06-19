from django.shortcuts import render
from django.shortcuts import HttpResponse
import requests,json
from pprint import pprint


# Create your views here.
def index(request):
    # response = requests.get('https://api.covid19api.com/summary')
    return render(request,'index.html')


def stats(request):
    return render(request,'stats.html')
  
