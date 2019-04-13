from flask import render_template
from app import app


@app.route('/')
@app.route('/index')
def index():
    user = {
        'username': 'John'
    }
    posts = [
        {
            'author': {
                'username': 'John'
            },
            'body': 'Beautiful day in HCM!'
        },
        {
            'author': {
                'username': 'Susan'
            },
            'body': 'The movie was so cool'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)
