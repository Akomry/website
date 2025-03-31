from flask import *
from flask_restx import *

app = Flask(__name__)
api = Api(app)


@api.route('/')
class Index(Resource):
    def get(self):
        data = {'message': 'Hello World!'}
        return data, 200

if __name__ == '__main__':
    app.run(debug=True)