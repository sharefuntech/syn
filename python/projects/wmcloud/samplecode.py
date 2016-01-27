# -*- coding: utf-8 -*-
from dataapiclient import Client
if __name__ == "__main__":
    try:
        client = Client()
        client.init('6ef0a9ddd1abfc4745ee84f7da567879e16223f1cc0592182655b06d34edbe08')
        # url1='/api/macro/getChinaDataGDP.csv?field=&indicID=M010000002&indicName=&beginDate=&endDate='
        # code, result = client.getData(url1)
        # if code==200:
        #     print result
        # else:
        #     print code
        #     print result
        url2='/api/fund/getFundNav.json?field=&beginDate=20140101&endDate=20141231&secID=&ticker=000001,000002,000003,000004,000005,000006,000007,000008,000009&dataDate='
        code, result = client.getData(url2)
        if(code==200):
            file_object = open('thefile.csv', 'w')
            file_object.write(result)
            file_object.close( )
        else:
            print code
            print result 
    except Exception, e:
        #traceback.print_exc()
        raise e
