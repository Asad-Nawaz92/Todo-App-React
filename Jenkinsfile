pipeline {
    agent any
    
    stages {
        stage('Setup') {
            steps {
                bat 'npm install -g netlify-cli'  
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'netlify deploy --dir=build --prod --auth %NETLIFY_AUTH_TOKEN% --message "Deployed from Jenkins"'
            }
        }
    }
}