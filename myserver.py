from flask import Flask,request
import ssl,urllib
ssl._create_default_https_context = ssl._create_unverified_context

app = Flask(__name__)

@app.route("/photo",methods=['POST'])
def photo():
  data = urllib.parse.urlencode(request.form).encode("utf8")
  res = urllib.request.urlopen("https://118.190.150.35:5000/api/photo",data=data).read()
  print(res)
  return res

@app.route("/check",methods=['POST'])
def check():
  data = urllib.parse.urlencode(request.form).encode("utf8")
  res = urllib.request.urlopen("https://118.190.150.35:5000/api/check", data=data).read()
  print(res)
  return res


if __name__ == "__main__":
  app.run(debug=True)
