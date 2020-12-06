---
id: 'Description list'
section: components
beta: true
cssPrefix: pf-c-description-list
---

## Examples

### Compact
```hbs
{{> description-list__example description-list--title="Compact description list" description-list--modifier="pf-m-compact"}}
```

### Fluid group grid template columns
```hbs
{{> description-list__inline-example description-list--title="Fluid group columns description list" description-list--modifier="pf-m-fluid pf-m-horizontal"}}
```

### Compact, fluid group grid template columns
```hbs
{{> description-list__inline-example description-list--title="Compact, fluid group grid template columns" description-list--modifier="pf-m-compact pf-m-fluid pf-m-horizontal"}}
```

### Fluid group column width
```hbs
{{#> description-list description-list--modifier="pf-m-horizontal"}}
  {{#> description-list-group description-list-group--modifier="pf-m-fluid"}}
    {{#> description-list-term}}
      Name
    {{/description-list-term}}
    {{#> description-list-description}}
      example
    {{/description-list-description}}
  {{/description-list-group}}
  {{#> description-list-group}}
    {{#> description-list-term}}
      Namespace
    {{/description-list-term}}
    {{#> description-list-description}}
      <a href="#">mary-test</a>
    {{/description-list-description}}
  {{/description-list-group}}
  {{#> description-list-group}}
    {{#> description-list-term}}
      Labels
    {{/description-list-term}}
    {{#> description-list-description}}
      example
    {{/description-list-description}}
  {{/description-list-group}}
  {{#> description-list-group}}
    {{#> description-list-term}}
      Pod selector
    {{/description-list-term}}
    {{#> description-list-description}}
      {{#> button button--modifier="pf-m-link pf-m-inline"}}
        {{#> button-icon button-icon--modifier="pf-m-start"}}
          <i class="fas fa-plus-circle" aria-hidden="true"></i>
        {{/button-icon}}
        app=MyApp
      {{/button}}
    {{/description-list-description}}
  {{/description-list-group}}
  {{#> description-list-group}}
    {{#> description-list-term}}
      Annotation
    {{/description-list-term}}
    {{#> description-list-description}}
      2 Annotations
    {{/description-list-description}}
  {{/description-list-group}}
{{/description-list}}
```

### Default
```hbs
{{> description-list__example description-list--title="Default DL"}}
```

### Default 2 col
```hbs
{{> description-list__example description-list--title="Default 2 column DL" description-list--modifier="pf-m-2-col"}}
```

### Default 3 col on lg
```hbs
{{> description-list__example description-list--title="Default 3 column DL" description-list--modifier="pf-m-3-col-on-lg"}}
```

### Horizontal
```hbs
{{> description-list__example description-list--title="Horizontal DL" description-list--modifier="pf-m-horizontal"}}
```

### Horizontal 2 col
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-2-col"}}
```

### Horizontal 3 col on lg
```hbs
{{> description-list__example description-list--title="Horizontal 3 column DL" description-list--modifier="pf-m-horizontal pf-m-3-col-on-lg"}}
```

## Auto fit

### Auto-fit basic
```hbs
{{> description-list__example description-list--title="Auto-fit basic" description-list--modifier="pf-m-auto-fit"}}
```

### Auto-fit basic, horizontal
```hbs
{{> description-list__example description-list--title="Auto-fit horizontal" description-list--modifier="pf-m-auto-fit pf-m-horizontal"}}
```

### Auto-fit, min width modified grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit with min width modifiers" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min: 150px;"'}}
```

### Auto-fit, min width modified, responsive grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit with responsive min width modifiers" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min: 150px; --pf-c-description-list--GridTemplateColumns--min-on-lg: 350px; --pf-c-description-list--GridTemplateColumns--min-on-2xl: 550px;"'}}
```

### Note: The default `min-width` value for `auto-fit` is `250px`. Therefore, the `max-width` value must be greater than the `min-width` value for `auto-fit` to function properly. So either `max-width` must be greater than `250px` or `min-width` must be set to a lower or `auto` value.

### Auto-fit, max width modified grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit with max width modifiers" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min: auto; --pf-c-description-list--GridTemplateColumns--max: 300px;"'
}}
```

### Auto-fit, max width modified, responsive grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit with max width modifiers" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--max: 300px; --pf-c-description-list--GridTemplateColumns--max-on-xl: 400px;"'
}}
```

### Auto-fit min/max width modified, grid template columns
```hbs
{{> description-list__example description-list--title="Auto column width DL" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min: 200px; --pf-c-description-list--GridTemplateColumns--max: 450px;"'
}}
```

### Auto-fit min/max width modified, responsive grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit" description-list--header="Auto fit" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-c-description-list--GridTemplateColumns--max-on-md: 200px; --pf-c-description-list--GridTemplateColumns--max-on-lg: 250px; --pf-c-description-list--GridTemplateColumns--max-on-xl: 250px;"'}}
```

## Responsive column definitions

### Default responsive columns
```hbs
{{> description-list__example description-list--title="Default responsive DL" description-list--modifier="pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

### Horizontal responsive columns
```hbs
{{> description-list__example description-list--title="Horizontal responsive DL" description-list--modifier="pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

## Auto-column-width

### Default auto columns width
```hbs
{{> description-list__example description-list--title="Auto column width DL" description-list--modifier="pf-m-auto-column-widths pf-m-3-col"}}
```

### Horizontal auto column width
```hbs
{{> description-list__example description-list--title="Horizontal ato-fit DL" description-list--modifier="pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg"}}
```

## Inline grid

### Default inline grid
```hbs
{{> description-list__example description-list--title="Default inline grid" description-list--modifier="pf-m-3-col pf-m-inline-grid"}}
```

<!-- ## Auto term with is only supported in FF currently

### Horizontal 2 col auto term width
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-auto-term-widths pf-m-2-col"}}
``` -->

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `title` | `.pf-c-description-list` | Provides an accessible title for the description list. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-description-list` | `<dl>` | Initiates the description list component. **Required** |
| `.pf-c-description-list__group` | `<div>` | Initiates a description list component group. **Required** |
| `.pf-c-description-list__term` | `<dt>` | Initiates a description list component term. **Required** |
| `.pf-c-description-list__description` | `<dd>` | Initiates a description list component description. **Required** |
| `.pf-c-description-list__text` | `<span>`, `<div>` | Initiates a description list component text element. Use a `<span>` when a child of `.pf-c-description-list__term`. **Required** |
| `.pf-m-compact` | `.pf-c-description-list` | Modifies the description list for the compact variation. |
| `.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list component term and description pair to a horizontal layout. |
| `.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list component term and description pair to a vertical layout. |
| `.pf-m-auto-column-widths` | `.pf-c-description-list` | Modifies the description list to format automatically. |
| `.pf-m-inline-grid` | `.pf-c-description-list` | Modifies the description list display to inline-grid. |
| `.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list number of columns. |
| `--pf-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}` | `.pf-c-description-list` | Modifies the min value of the `grid-template-columns` declaration. |
| `--pf-c-description-list--GridTemplateColumns--max{-on-[breakpoint]}: {width}` | `.pf-c-description-list` | Modifies the max value of the `grid-template-columns` declaration. |
| `--pf-c-description-list__term--m-horizontal--width{-on-[breakpoint]}: {width}` | `.pf-c-description-list.pf-m-horizontal` | Modifies the value for `--pf-c-description-list--m-horizontal__term--width` declaration. |

<!-- | `.pf-m-order[0-12]{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element. |
| `.pf-m-order-first{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element to -1. |
| `.pf-m-order-last{-on-[breakpoint]}` | `..pf-c-description-list__group` | Modifies the order of the flex layout element to $limit + 1. | -->
