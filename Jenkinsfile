pipeline {

    agent {
        docker {
            image 'node:12-alpine' 
            args '-v /Users/stevearayasolorzano/.m2:/root/.m2' 
        }
    }  

    stages {

        stage('Build') {

            steps {
                sh 'node --version'
            }
        }
       
    }
}