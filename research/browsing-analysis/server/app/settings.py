
MONGO_HOST = 'localhost'
MONGO_PORT = 27017
MONGO_DBNAME = 'sites'
schema = {
   
    'url': {
        'type': 'string',
        'minlength': 1,
        'maxlength': 200,
        'required': True
    },
    'timeIn': {
        'type': 'string',
        'minlength': 1,
        'maxlength': 50,
        'required': True
        
    },
   
    'title': {
        'type': 'string',
        'minlength': 1,
        'maxlength': 200
    }
}
sites = {
    'resource_methods': ['GET', 'POST'],
    'schema': schema
}
DOMAIN = {'sites': sites}
X_DOMAINS = '*'
X_HEADERS ='*'
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']