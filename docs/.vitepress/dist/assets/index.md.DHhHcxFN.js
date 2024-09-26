import{_ as e,c as a,o as t,V as o}from"./chunks/framework.C3kJ9Dd1.js";const l="/laravel-lang-country-docs-v3/assets/laravel-langcountry.rVWLDpp3.png",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1708250018000}'),s={name:"index.md"},n=o('<p><img src="'+l+'" alt="laravel-langcountry.png"></p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Highlights</p><p>Have you ever had the problem that you needed a date format had to be localized? <br> Or that you needed to show a date in a specific language? <br> Or that you needed to show a country name in the local language? <br> Or that you needed to show a currency symbol in the local currency? <br> Or that you ...</p><p><strong>The Laravel Lang Country package is here to help you with that!</strong></p></div><p>Setting the locale in Laravel is not enough most of the time, some countries use more than one language. Also, different countries use different date notations formats despite their language. Proper localization gives us many challenges. <strong>This package will help you out with new tools in your tool belt</strong>.</p><h2 id="in-a-nutshell" tabindex="-1">In a nutshell <a class="header-anchor" href="#in-a-nutshell" aria-label="Permalink to &quot;In a nutshell&quot;">​</a></h2><ul><li>You can set all supported languages and countries of your choice and make use of all the tools and data that are available in this package.</li><li>It will automatically try to find the best match for the user based on the <strong>browser settings</strong> when a user first visits your app.</li><li>It has a smart fallback.</li><li>It provides a middleware that will set the locale and the country of the user.</li><li>It provides an (optional) language switcher that is based on countries (with flags) and not only on languages. So for some countries, it will even show multiple languages. <a href="/laravel-lang-country-docs-v3/usage/language-switcher.html">(Read more)</a></li><li>It provides you with <a href="/laravel-lang-country-docs-v3/usage/date-time.html">date/time helpers</a>.</li><li>It provides you with <a href="/laravel-lang-country-docs-v3/usage/language.html">language helpers</a></li><li>It provides you with <a href="/laravel-lang-country-docs-v3/usage/currency.html">currency helpers</a>.</li><li>It will store the users preferred language and country in the database.</li><li>And more...</li></ul><p>I&#39;ve also written an article about it <a href="https://stefrouschop.nl/why-a-locale-is-sometimes-not-enough-in-laravel-28b1e82029cc" target="_blank" rel="noreferrer">here</a>.</p><h2 id="what-will-it-do" tabindex="-1">What will it do? <a class="header-anchor" href="#what-will-it-do" aria-label="Permalink to &quot;What will it do?&quot;">​</a></h2><p>For each user or guest it will create a four character <code>lang_country</code> code. For guests, it will try to make a perfect match based on the browser settings. For users, it will load the last used <code>lang_country</code>, because we will store it in the DB.</p><p><strong>There will ALWAYS be two sessions set:</strong></p><ul><li><code>lang_country</code> (example: <code>nl-BE</code>)</li><li><code>locale</code> (examples: <code>nl</code>, <code>en</code>, <code>fr</code>, <code>es</code>, <code>de</code>, ...)</li></ul><p>When a user will log in to your app, it will load the last <code>lang_country</code> and set the sessions accordingly.</p><div class="tip custom-block"><p class="custom-block-title">Why do we need these session?</p><p>With these sessions, you can use the Laravel localization features as you are used to. But now you can also use the new helpers that are available in this package.</p></div>',13),r=[n];function i(c,d,h,u,p,g){return t(),a("div",null,r)}const w=e(s,[["render",i]]);export{y as __pageData,w as default};
