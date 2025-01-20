pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Asad-Nawaz92/Todo-App-React', branch: 'master'
            }
        }
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
                bat 'npm test -- --passWithNoTests'
            }
        }
        stage('Deploy') {
            steps {
                bat 'netlify deploy --dir=build --prod --auth nfp_5UzoqBZS1EiJ39vCv6ixy2FmUyoapKX47817 --message "Deployed from Jenkins"'
            }
        }
    }
}
