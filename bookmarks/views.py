import urllib2
import json

from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from .forms import BookmarkForm
from django.template import RequestContext
from bs4 import BeautifulSoup
from django.http import JsonResponse

def home(request):
    data = {}
    form = BookmarkForm()
    if request.is_ajax():
        #fetch html
        url = request.POST.get('url')
        if url:
            source = urllib2.urlopen(url)
            #parse with BeautifulSoup
            BS = BeautifulSoup(source, 'html.parser')
            #search for title element, print element.text
            title = BS.find('title').text
            data['title']=title
            print data
            return JsonResponse(data)
    else:
        return render_to_response('landingPage.html',{'form':form},context_instance=RequestContext(request))
