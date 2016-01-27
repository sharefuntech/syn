import urllib, urllib2, socket, cookielib
from urllib2 import HTTPCookieProcessor

def getCookie():
    header={
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:14.0) Gecko/20100101 Firefox/14.0.1\r\n',
    }
    url1='http://flight.qunar.com/twell/cookie/allocateCookie.jsp'
    req1=urllib2.Request(url1, headers=header)

    #generagte the cookie jar to store the cookie
    ckjar=cookielib.MozillaCookieJar('qunar.cookie')
    ckproc=urllib2.HTTPCookieProcessor(ckjar)

    opener=urllib2.build_opener(ckproc)

    f=opener.open(req1)
    htm=f.read()
#    print htm
    f.close()

    #save cookie in the cookie
    ckjar.save(ignore_discard=True, ignore_expires=True)

    url2='http://flight.qunar.com/twell/flight/Search.jsp?from=fi_ont_search&searchType=OnewayFlight&fromCity=%E6%88%90%E9%83%BD&toCity=%E5%A4%A9%E6%B4%A5&fromDate=2012-08-24&toDate=2012-08-28'
    #construct the request
    reqss=urllib2.Request(url2)
    #process the new cookie
    ckproc2=urllib2.HTTPCookieProcessor(ckjar)
    #construct the opener
    opener2=urllib2.build_opener(ckproc2)
    #open the url using cookie
    page2=opener2.open(reqss)

#    print page2.read()
    print ckjar._cookies

    url3='http://flight.qunar.com/twell/flight/DynamicFlightInfo.jsp?&departureCity=%E6%88%90%E9%83%BD&arrivalCity=%E5%A4%A9%E6%B4%A5&departureDate=2012-08-24&fromCity=%E6%88%90%E9%83%BD&toCity=%E5%A4%A9%E6%B4%A5&from=fi_ont_search&_token=99798'
    req3=urllib2.Request(url3)
    ckproc3=urllib2.HTTPCookieProcessor(ckjar)
    opener3=urllib2.build_opener(ckproc3)
    page3=opener3.open(req3)

    print page3.read()

    print ckjar._cookies

getCookie()  
