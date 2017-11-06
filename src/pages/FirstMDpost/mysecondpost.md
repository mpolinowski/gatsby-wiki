---
path: '/md-posts/second-post'
title: 'Second Blog Post'
date:   '2017-10-05'
author: 'Mike Polinowski'
chapter: 'Markdown Posts'
---

# A dive into Markdown Syntax


# Heading

## Sub-heading

### Another deeper heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line leave a  
line break.

Text attributes _italic_, *italic*, __bold__, **bold**, `monospace`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

  > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> > This is nested blockquote.
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.



This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

if you want to show the actual text of a URL or email address, and also have it be a clickable link, you can do this:
<http://example.com/>
<address@example.com>

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");


<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
    beep
end tell
</code></pre>

A backtick returns a code tag `<html>`.

Or use three backticks for a code span

```js
export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}
```


Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax:

\*literal asterisks\*

Markdown provides backslash escapes for the following characters:

```
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```


[Go back](/md-posts/)


<div class="footer">
        &copy; 2004 Foo Corporation
    </div>
