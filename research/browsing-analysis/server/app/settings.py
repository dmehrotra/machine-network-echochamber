
MONGO_HOST = 'localhost'
MONGO_PORT = 27017

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
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']