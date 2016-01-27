#!/usr/bin/env python
#coding=utf-8
"""
    Author:         Anemone
    Filename:       getmain.py
    Last modified:  2015-02-19 16:47
    E-mail:         anemone@82flex.com

"""
import urllib2
import BeautifulSoup
import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def getEachArticle(url):
#    response = urllib2.urlopen('http://www.52duzhe.com/2015_01/duzh20150104.html')
    response = urllib2.urlopen(url)
    html = response.read()

    soup = BeautifulSoup(html)#.decode("utf-8").encode("gbk"))
    #for i in soup.find_all('div'):
    #    print i,1
    title=soup.find("h1").string
    writer=soup.find(id="pub_date").string.strip()
    _from=soup.find(id="media_name").string.strip()
    text=soup.get_text()#.encode("utf-8")
    main=re.split("BAIDU_CLB.*;",text)
    result={"title":title,"writer":writer,"from":_from,"context":main[1]}
    return result
    #new=open("new.txt","w")
    #new.write(result["title"]+"\n\n")
    #new.write(result["writer"]+"  "+result["from"])
    #new.write(result["context"])
    #new.close()
def getCatalog(issue):
    url="http://www.52duzhe.com/"+issue[:4]+"_"+issue[-2:]+"/"
    firstUrl=url+"duzh"+issue+"01.html"
    firstUrl=url+"index.html"
    duzhe=dict()
    response = urllib2.urlopen(firstUrl)
    html = response.read()
    soup=BeautifulSoup(html)
    firstUrl=url+soup.table.a.get("href")
    response = urllib2.urlopen(firstUrl)
    html = response.read()
    soup = BeautifulSoup(html)
    all=soup.find_all("h2")
    for i in all:
        print i.string
        duzhe[i.string]=list()
        for link in i.parent.find_all("a"):
            href=url+link.get("href")
            print href
            while 1:
                try:
                    article=getEachArticle(href)
                    break
                except:
                    continue
            duzhe[i.string].append(article)
    return duzhe
def readDuZhe(duzhe):
    for eachColumn in duzhe:
        for eachArticle in duzhe[eachColumn]:
            print eachArticle["title"]
if __name__ == '__main__':
#    issue=raw_input("issue(201501):")
    readDuZhe(getCatalog("201424"))


