# \<cookie-banner\> Web Component
This component is located in the private GitHub repo [aquent/web-components](https://github.com/aquent/web-components/tree/master/cookie-banner). It produces a banner at the bottom of a webpage that gives the user the option to accept or decline non-essential cookies on that site.

## Element Customization and Attributes
Inside the `<cookie-banner>` element, any HTML markup can be included to customize the text displayed, or offer translations for international sites. Leaving the element blank will result in default en-US language for the statement.

In addition to supplying your own inner content for the banner, the following attributes can be added to the element:
- **acceptText**: Sets the text for the *Accept Cookies* button (optional)
- **declineText**: Sets the text for the *Decline Cookies* button (optional)
- **cookiesHref**: Sets a path to the pages with cookie disclosure information (optional; ***NOTE:*** *Only used with default text. If providing customized wording for the banner, a link to the cookie disclosure page must be manually added in the content*)
