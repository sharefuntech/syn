# -*- coding:utf8 -*-  
# Python:         2.7.8  
# Platform:       Windows  
# Author:         wucl  
# Version:        1.0  
# Program:        自动下载妹子图的图片并保存到本地  
# History:        2015.5.31  

import urllib2, os, os.path, urllib  
from bs4 import BeautifulSoup  
  


def get_pages(url):  
    """ 
    获取妹子图网站的页数 
    """      
    html=urllib2.urlopen(url).read()  
    soup=BeautifulSoup(html)  
    nums=soup.find_all('a',class_='page-numbers')  
    pages=int(nums[-2].text)  
    return pages  
  
      
def get_menu(url):  
    """ 
    获取页面的所有妹子图主题的链接名称和地址，记入列表 
    """  
    html=urllib2.urlopen(url).read()  
    soup=BeautifulSoup(html)  
    menu=[]  
    menu_list=soup.find_all('a',target='_blank')  
    for i in menu_list:  
        result=i.find_all('img',class_='lazy')  
        if result:  
            name=result[0]['alt']  
            address=i['href']  
            menu.append([name,address])  
    return menu  
  
def get_links(url):  
    """ 
    获取单个妹子图主题一共具有多少张图片 
    """  
    html=urllib2.urlopen(url).read()  
    soup=BeautifulSoup(html)  
    all_=soup.find_all('a')  
    nums=[]  
    for i in all_:  
        span=i.find_all('span')  
        if span:  
            nums.append(span[0].text)  
    return nums[-2]  
              
def get_image(url,filename):  
    """ 
    从单独的页面中提取出图片保存为filename 
    """  
    html=urllib2.urlopen(url).read()  
    soup=BeautifulSoup(html)  
    image=soup.find_all('p')[0].find_all('img')[0]['src']  
    urllib.urlretrieve(image,filename)  
  
def main(page):  
    """ 
    下载第page页的妹子图 
    """  
    print u'正在下载第 %d 页' % page  
    page_url=url+'/page/'+str(page)  
    menu=get_menu(page_url)  
    print u'@@@@@@@@@@@@@@@@第 %d 页共有 %d 个主题@@@@@@@@@@@@@@@@' %(page,len(menu))  
    for i in menu:  
        dir_name=os.path.join('MeiZiTu',i[0])  
        if not os.path.exists(dir_name):  
            os.mkdir(dir_name)  
        pic_nums=int(get_links(i[1]))  
        print u'\n\n\n*******主题 %s 一共有 %d 张图片******\n' %(i[0],pic_nums)  
        for pic in range(1,pic_nums+1):  
            basename=str(pic)+'.jpg'  
            filename=os.path.join(dir_name,basename)  
            pic_url=i[1]+'/'+str(pic)  
            if not os.path.exists(filename):  
                print u'......%s' % basename,  
                get_image(pic_url,filename)  
            else:  
                print filename+u'已存在，略过'  
      
if __name__=='__main__':  
    url='http://www.mzitu.com/' 

    headers = ('User-Agent','Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11')
     
    pages=get_pages(url)  
    print u'***************妹子图一共有 %d 页******************' %pages  
    if not os.path.exists('MeiZiTu'):  
        os.mkdir('MeiZiTu')  
    page_start=input(u'Input the first page number:\n')  
    page_end=input(u'Input the last page number:\n')  
    if page_end>page_start:  
        for page in range(page_start,page_end):  
            main(page)  
    elif page_end==page_start:  
        main(page_end)  
    else:  
        print u"输入错误，起始页必须小于等于结束页\n" 