# Example 2: Forms and Tables

## Goal

Create a task form and a task table with validation and clear table structure.

## Concepts used

- [Lesson 2: HTML forms, tables, and media](../../lessons/02-html-forms-tables-media.md)

## Run it

```bash
cd module-02-html-css-js/examples/02-forms-and-tables
python3 -m http.server 8001
```

Then open http://localhost:8001.

## Expected output

The page shows a form with name, due date, and priority fields, plus a table below it with at least one task row.

## How it works

### Code-map table

| File | Lines | What happens |
|---|---:|---|
| `index.html` | 1-80 | Defines the task form and table |
| `styles.css` | 1-120 | Styles the form, table, and layout |

### Numbered steps

1. The form includes labels and a submit button.
2. `required` prevents empty submissions.
3. The table organizes task data into rows and columns.
4. HTML structure makes the form and table clear to browsers and users.

## 3 experiments

1. Remove `required` from one field and submit the form with empty data.
2. Change the table to three columns and update the header labels.
3. Add a checkbox field to the form and style it.

## Troubleshooting

- Form submits even when fields are empty  
  Confirm the `required` attribute is present.
- Table does not align correctly  
  Check that each row has matching cells and that table tags are closed.
- Labels are not clickable  
  Ensure the `for` attribute matches the input `id`.

## Notes

This example uses HTML form elements and accessible labeling, which is standard for task management interfaces.
