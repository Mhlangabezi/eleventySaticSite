# CREATING A STATIC WEBSITE WITH 11ty

Eleventy is a Static Site Generator (SSG). For you to get started adnd replicate this project you need the following dependancies (this is based on Windows operating system):
    1. GitHub account
    2. Node.js packages

## GETTING STARTED

To get started, create and open a folder in your preferred code editor. Then open your terminal, either command prompt or powershell and run the following commands:

```
npm init -y
npm install --save-dev @11ty/eleventy
```
After running the second command above, there will be an added package.json file in your folder.

Now let us create your first configuration file- .eleventy.js. This file will controll the behaviou of your root project. In your .eleventy,js file add the following code:

```
module.exports = function(eleventyConfig) {    
    return {
      dir: {
        input: "src",
        output: "public"
      },
    };
  };

```

Now let us create the source file named src, this file will store all the files you will need to create a static site. From the source file, create an _includes folder, and within _include folder, create base.njk - this is your project layout.

Add the following code to your layout file - base.njk:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{{ title }}</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="container">
        <div id="header">
        <h1> {{ title }} </h1>
    </div>
    <main>
        <div id="content">
    {{content | safe}}
        </div>
    </main>
    <div id="footer">
        Copyright &; 2022 Mhlaa
        </div>
  </body>
</html>
```
When the configuaration file is set, create and index.md fil and add the following:

```
---
title: AWESOME MOVIE SERIES
layout: base.njk
---
Movies
```

Let us now create our first post folder and name it posts. within posts folder, create a json file with the same name as the parent folder i.e posts.json and add the folowing content:

```
{
    "layout": "base.njk",
    "tags": "posts"
}
```

Then create a movies.md file that will hold the content of the pulled movies.
