# markdown-it-indent

This is a plugin for markdown-it that adds syntaxes for controlling paragraph indentation.

## Paragraph indentation

Write several `^` separated by a single space before the first line of a paragraph to indent the paragraph. Each `^` will indent by 1em

Input:

```
Paragraph indentation

^ ^
2em whole paragraph indentation.
```

Output:

```
Paragraph indentation

    2em whole paragraph
    indentation
```

## Line indentation

Similar to paragraph indentation, carets before the content of paragraph will indent only the first line or the following lines depending on the line they are written before.

Input:
```
First line indentation:

^ ^ 2em first line indentation
```

Output:
```
First line indentation:

    2em first line
indentation
```

Input (written before the second line):
```
Hanging indentation:

The first line is not indented,
^ ^ but the following lines are 
indented by 2em.
```

Output:
```
Hanging indentation:

The first line is not
    indented, but the
    following lines are 
    indented by 2em.
```

## Line block

Borrowed from [pandoc's extension](https://pandoc.org/MANUAL.html#line-blocks). Wrapping line beginning with space is currently not implemented.

Input:
```
| The limerick packs laughs anatomical
| In space that is quite economical.
|    But the good ones I've seen
|    So seldom are clean
| And the clean ones so seldom are comical
```

Output:
```
The limerick packs laughs anatomical
In space that is quite economical.
  But the good ones I've seen
  So seldom are clean
And the clean ones so seldom are comical
```

## Usage

When a paragraph has any type of indentation, the class `indented` is appended. The specific type and amount will be appended as css variables.

- `--head-indent`: whole paragraph indentation
- `--initial-indent`: first line indetation
- `--following-indent`: following lines indentation

You must use a custom css rule to make it render properly. Like below:

```
.indented {
    padding-left: calc(var(--head-indent, 0em) + var(--following-indent, 0em));
    text-indent: calc(var(--initial-indent, 0em) - var(--following-indent, 0em));
}
```
