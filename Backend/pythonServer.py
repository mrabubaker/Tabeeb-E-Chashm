from flask import Flask,request
app = Flask(__name__)
import sys
import json

@app.route('/BI',methods = ['POST', 'GET'])
def BI():
    if request.method == 'POST':
        print("Post Request on BI",file=sys.stderr)
        data = request.data
        dataDict = json.loads(data)

        # productsSearchedList contains a list of item searched
        # productsOrderedList contains a list of items ordered
        productsSearchedList =dataDict.get('productsSearched')
        productsOrderedList = dataDict.get('productsOrdered')
        TrendingList= []
        ImprovementList = []
        l1=[]
        l2=[]
        print("Products Searched")
        for product in productsSearchedList:
            l1.append(product['productName'])
        for prod in productsOrderedList:
            l2.append(prod['productName'])
        print("l1: ",l1)
        print("l2: ",l2)
        for l in l1:
            print(l)
            if l in l2:
                TrendingList.append(l)
            else:
                ImprovementList.append(l)
        # def intersection(l1,l2):
        #     return set(l1).intersection(l2)
        #
        # TrendingList.append(intersection(l1,l2))
        #
        # def Diff(l1, l2):
        #     return (list(set(l1) - set(l2)))
        #
        # ImprovementList.append(Diff(l1,l2))

        print(dataDict,file=sys.stderr)


        returnDict={
           "Trending": TrendingList,
           "NeedImprovement": ImprovementList
        }
        print(returnDict)
        return str(returnDict)
    elif request.method == 'GET':
        return 'GET Request on BI'

if __name__ == '__main__':
    app.run(debug=True)