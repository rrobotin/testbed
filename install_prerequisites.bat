#!/bin/bash
git clone {{event.head.repo.url}} repo && 
cd repo && 
git config advice.detachedHead false 
&& git checkout {{event.head.sha}} 
&& npm install . && 
npm test