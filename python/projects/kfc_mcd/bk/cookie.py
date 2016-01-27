import cookielib
import urllib2

loginUrl = "http://www.kfc.com.cn/kfccda/storelist/index.aspx";
cj = cookielib.CookieJar();
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj));
urllib2.install_opener(opener);
resp = urllib2.urlopen(loginUrl);
for index, cookie in enumerate(cj):
    print '[',index, ']',cookie;
