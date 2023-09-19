In this project, let's build a **Read More/Less** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js-hooks/read-more-less-output-v0.gif" alt="read more read less output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js-hooks/read-more-less-sm-outputs-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Read Less](https://assets.ccbp.in/frontend/content/react-js-hooks/read-less-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Read More](https://assets.ccbp.in/frontend/content/react-js-hooks/read-more-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened,
  - The text should be shortened to the first one hundred and seventy characters from the given reactHooksDescription and should be displayed
  - **Read More** button should be displayed
- When the **Read More** button is clicked,
  - The total text from the given reactHooksDescription should be displayed
  - **Read Less** button should be displayed
- When the **Read Less** button is clicked,

  - The text should be shortened to the first one hundred and seventy characters from the given reactHooksDescription and should be displayed
  - **Read More** button should be displayed

- The `ReadMoreReadLess` component receives the `reactHooksDescription` as a prop with String data type
  </details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/ReadMore/index.js`
- `src/components/ReadMore/styledComponents.js`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- To extract the part of the string we can use the `slice()`

  ```js
  const text = 'Hello world!';
  const slicedText = text.slice(0, 5); // Hello
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purposes
- **Roboto** should be applied as `font-family` for **React Hooks** heading

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/hooks/react-hooks-img.png](https://assets.ccbp.in/frontend/hooks/react-hooks-img.png) alt should be **react hooks**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #1f81ff; width: 150px; padding: 10px; color: white">Hex: #1f81ff</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
