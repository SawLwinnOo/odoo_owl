{
    'name': "Views Inherits",
    'depends': ['web', 'hr_attendance'],
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'view_inherit/static/src/components/**/*.js',
            'view_inherit/static/src/components/**/*.xml',
        ],
    }
}
