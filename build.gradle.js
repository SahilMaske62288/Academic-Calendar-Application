
buildscript {
    repositories {
        // Make sure that you have the following two repositories
        google()  // Google's Maven repository

        mavenCentral()  // Maven Central repository

    }
}
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.15'
    }
}// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id 'com.android.application' version '8.2.1' apply false
    id 'com.android.library' version '8.2.1' apply false
}
