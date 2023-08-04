![Star Badge](https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99)
# Integrating reCAPTCHA with React Application

## Installation

First, you need to install the `react-google-recaptcha` package:

```bash
npm install react-google-recaptcha
```

## Get reCAPTCHA Keys
1. Visit the reCAPTCHA admin panel: https://www.google.com/recaptcha/admin/create
   
2. Create a new reCAPTCHA site and choose reCAPTCHA V2 (Checkbox).
4. Add your domain(s) where the reCAPTCHA will be used. Make sure to specify the correct domain(s) to ensure proper functionality.
   
5.  After creating the site, you will receive two keys: Site Key and Secret Key. Keep these keys secure.


## Usage
The usage code can be found in the source code above in the files. Just make sure to replace the SITE_KEY.

# Note
Make sure to use reCAPTCHA V2 (Checkbox) for this integration. The react-google-recaptcha package is designed to work with reCAPTCHA V2.
   
