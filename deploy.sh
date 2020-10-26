#!/bin/bash

# Load Environment variables from .env file
echo Loading Environment variables...
source .env && export $(cut -d= -f1 .env | grep -Fv '#'  | grep -v '^$')

# Build and upload Docker image to Google Docker Registry
echo Building Image...
gcloud builds submit --config=cloudbuild.yaml --substitutions=_DEPLOY_ENV=${DEPLOY_ENV}

# Deploy image in Google Run
echo Deploying Image...
gcloud run deploy login-page-front --image=gcr.io/totemic-sector-293316/login-page-front --platform=managed --region=europe-west2 --port=80