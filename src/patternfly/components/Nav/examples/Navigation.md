---
id: Navigation
section: components
cssPrefix: pf-v5-c-nav
---

import './Navigation.css'

## Examples

### Default
```hbs
{{#> nav nav--id='default-example' nav--width='300px'}}
  {{#> nav-section nav-section-title--text='Cluster'}}
    {{#> nav-list}}
      {{> nav-item nav-link--text='Dashboard'}}
      {{> nav-item nav-link--text='Builds'}}
      {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
      {{> nav-item nav-link--text='Networking'}}
      {{> nav-item nav-link--text='Observe'}}
      {{> nav-item nav-link--text='Operations'}}
      {{> nav-item nav-link--text='Applications'}}
      {{> nav-item nav-link--text='Workloads'}}
    {{/nav-list}}
  {{/nav-section}}
{{/nav}}
```

### Grouped nav
```hbs
{{#> nav nav--id='grouped-nav-example'}}
  {{#> nav-section nav-section-title--text='Cluster'}}
    {{#> nav-list}}
      {{> nav-item nav-link--text='Dashboard'}}
      {{> nav-item nav-link--text='Builds'}}
      {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
      {{> nav-item nav-link--text='Networking'}}
    {{/nav-list}}
  {{/nav-section}}
  {{#> nav-section nav-section-title--text='Settings'}}
    {{#> nav-list}}
      {{> nav-item nav-link--text='User management'}}
      {{> nav-item nav-link--text='Administration'}}
      {{> nav-item nav-link--text='Import YAML'}}
      {{> nav-item nav-link--text='Help & Support'}}
    {{/nav-list}}
  {{/nav-section}}
{{/nav}}
```

### Grouped nav, no titles
```hbs
{{#> nav nav--id='grouped-nav-no-titles-example'}}
  {{#> nav-section nav-section--aria-label='Cluster'}}
    {{#> nav-list}}
      {{> nav-item nav-link--text='Dashboard'}}
      {{> nav-item nav-link--text='Builds'}}
      {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
      {{> nav-item nav-link--text='Networking'}}
    {{/nav-list}}
  {{/nav-section}}
  {{> divider}}
  {{#> nav-section nav-section--aria-label='Settings'}}
    {{#> nav-list}}
      {{> nav-item nav-link--text='User management'}}
      {{> nav-item nav-link--text='Administration'}}
      {{> nav-item nav-link--text='Import YAML'}}
      {{> nav-item nav-link--text='Help & Support'}}
    {{/nav-list}}
  {{/nav-section}}
{{/nav}}
```

### Expanded
```hbs
{{#> nav nav--id='expanded-example'}}
  {{#> nav-list}}
    {{#>nav-item
        nav-link--text='Cluster'
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-item--IsExpandable=true
        nav-item--IsExpanded=true
      }}
      {{#>nav-subnav
          nav-subnav--labelledby=nav-item--id
          nav-item--IsExpandable=false
          nav-item--IsExpanded=false
        }}
        {{> nav-item nav-link--text='Dashboard'}}
        {{> nav-item nav-link--text='Builds'}}
        {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
        {{> nav-item nav-link--text='Networking'}}
      {{/nav-subnav}}
    {{/nav-item}}

    {{#>nav-item
        nav-link--text='Settings'
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-item--IsExpandable=true
        nav-item--IsExpanded=true
      }}
      {{#>nav-subnav
          nav-item--IsExpandable=false
          nav-item--IsExpanded=false
          nav-subnav--labelledby=nav-item--id
        }}
        {{> nav-item nav-link--text='User management'}}
        {{> nav-item nav-link--text='Administration'}}
        {{> nav-item nav-link--text='Import YAML'}}
        {{> nav-item nav-link--text='Help & Support'}}
      {{/nav-subnav}}
    {{/nav-item}}

    {{#> nav-item
        nav-item--IsExpandable=true
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-link--text='Profile'
      }}
      {{#>nav-subnav nav-subnav--labelledby=nav-item--id}}
        {{> nav-item nav-link--text='User Settings'}}
        {{> nav-item nav-link--text='Preferences'}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

### Expanded with subnav titles
```hbs
{{#> nav nav--id='expandable-with-subnav-titles-example'}}
  {{#> nav-list}}
    {{#>nav-item
        nav-link--text='Cluster'
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-item--IsExpandable=true
        nav-item--IsExpanded=true
      }}
      {{#>nav-subnav
          nav-item--IsExpandable=false
          nav-item--IsExpanded=false
          nav-section-title--text='Options'
          nav-subnav--labelledby=nav-item--id
        }}
        {{> nav-item nav-link--text='Dashboard'}}
        {{> nav-item nav-link--text='Builds'}}
        {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
        {{> nav-item nav-link--text='Networking'}}
      {{/nav-subnav}}
    {{/nav-item}}

    {{#>nav-item
        nav-link--text='Settings'
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-item--IsExpandable=true
      }}
      {{#>nav-subnav nav-subnav--labelledby=nav-item--id}}
        {{> nav-item nav-link--text='User management'}}
        {{> nav-item nav-link--text='Administration'}}
        {{> nav-item nav-link--text='Import YAML'}}
        {{> nav-item nav-link--text='Help & Support'}}
      {{/nav-subnav}}
    {{/nav-item}}

    {{#> nav-item
        nav-link--text='Profile'
        nav-item--id=(dasherize nav--id nav-link--text)
        nav-item--IsExpandable=true
      }}
      {{#>nav-subnav nav-subnav--labelledby=nav-item--id}}
        {{> nav-item nav-link--text='User Settings'}}
        {{> nav-item nav-link--text='Preferences'}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

### Mixed
```hbs
{{#> nav nav--id='default-example' nav--width='300px'}}
  {{#> nav-section nav-section-title--text='Cluster'}}
    {{#> nav-list nav-section-title--text=false}}
      {{> nav-item nav-link--text='Dashboard'}}
      {{> nav-item nav-link--text='Builds'}}
      {{> nav-item nav-link--text='Compute'}}

      {{#>nav-item
          nav-link--text='Settings'
          nav-item--id=(dasherize nav--id nav-link--text)
          nav-item--IsExpandable=true
          nav-item--IsExpanded=true
        }}
        {{#>nav-subnav
            nav-item--IsExpandable=false
            nav-item--IsExpanded=false
            nav-subnav--labelledby=nav-item--id
          }}
          {{> nav-item nav-link--text='User management'}}
          {{> nav-item nav-link--text='Administration' nav-link--IsCurrent=true}}
          {{> nav-item nav-link--text='Import YAML'}}
          {{> nav-item nav-link--text='Help & Support'}}
        {{/nav-subnav}}
      {{/nav-item}}
      {{#>nav-item
          nav-link--text='Profile'
          nav-item--id=(dasherize nav--id nav-link--text)
          nav-item--IsExpandable=true
          nav-item--IsExpanded=true
        }}
        {{#>nav-subnav
            nav-item--IsExpandable=false
            nav-item--IsExpanded=false
            nav-subnav--labelledby=nav-item--id
          }}
          {{> nav-item nav-link--text='User Settings'}}
          {{> nav-item nav-link--text='Preferences'}}
        {{/nav-subnav}}
      {{/nav-item}}
    {{/nav-list}}
  {{/nav-section}}
{{/nav}}
```

### Expandable, third level
```hbs
{{#> nav nav--id="expandable-third-level-example"}}
  {{#> nav-list}}
    {{> nav-item nav-link--text='Clusters'}}
    {{> nav-item nav-link--text='Overview'}}
    {{> nav-item nav-link--text='Releases'}}
    {{#>nav-item
        nav-link--text='Subscriptions'
        nav-item--IsExpandable=true
        nav-item--id=(dasherize nav--id nav-link--text)
      }}
      {{#>nav-subnav
          nav-subnav--labelledby=nav-item--id
          nav-item--IsExpandable=false
          nav-item--IsExpanded=false
        }}
        {{> nav-item nav-link--text='Renew'}}
        {{> nav-item nav-link--text='Cancel'}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-link--text='Cost management' nav-item--IsExpandable=true nav-item--IsExpanded=true}}
      {{#>nav-subnav
          nav-subnav--labelledby=nav-item--id
          nav-item--IsExpandable=false
          nav-item--IsExpanded=false
        }}
        {{> nav-item nav-link--text='Overview'}}
        {{> nav-item nav-link--text='OpenShift'}}
        {{#>nav-item
            nav-link--text='Public clouds'
            nav-item--id=(dasherize nav--id nav-link--text)
            nav-item--IsExpandable=true
            nav-item--IsExpanded=true
          }}
          {{#>nav-subnav
              nav-item--IsExpandable=false
              nav-item--IsExpanded=false
            }}
            {{> nav-item nav-link--text='Amazon Web Services'}}
            {{> nav-item nav-link--text='Microsoft Azure' nav-link--IsCurrent=true}}
            {{> nav-item nav-link--text='Google Cloud Services'}}
          {{/nav-subnav}}
        {{/nav-item}}
        {{> nav-item nav-link--text='Cost Models'}}
        {{> nav-item nav-link--text='Cost explorer'}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{> nav-item nav-link--text='Support Cases'}}
  {{/nav-list}}
{{/nav}}
```

### Horizontal
```hbs
{{#> nav nav--id='horizontal-example' nav--IsHorizontal=true}}
  {{#> nav-list}}
    {{> nav-item nav-link--text='Dashboard'}}
    {{> nav-item nav-link--text='Builds'}}
    {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
    {{> nav-item nav-link--text='Networking'}}
  {{/nav-list}}
{{/nav}}
```

### Horizontal overflow
```hbs
{{#>nav nav--id='horizontal-overflow-example'
    nav--HasScroll=true
    nav--IsHorizontal=true
    nav--IsScrollable=true
  }}
  {{#> nav-list}}
    {{> nav-item nav-link--text='Dashboard'}}
    {{> nav-item nav-link--text='Builds'}}
    {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
    {{> nav-item nav-link--text='Networking'}}
    {{> nav-item nav-link--text='Observe'}}
    {{> nav-item nav-link--text='Operations'}}
    {{> nav-item nav-link--text='Applications'}}
    {{> nav-item nav-link--text='Workloads'}}
  {{/nav-list}}
{{/nav}}
```

### Horizontal subnav
```hbs
{{#>nav
    nav--id='horizontal-subnav-example'
    nav--IsHorizontalSubnav=true
  }}
  {{#> nav-list}}
    {{> nav-item nav-link--text='Dashboard'}}
    {{> nav-item nav-link--text='Builds'}}
    {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
    {{> nav-item nav-link--text='Networking'}}
    {{> nav-item nav-link--text='Observe'}}
    {{> nav-item nav-link--text='Operations'}}
    {{> nav-item nav-link--text='Applications'}}
    {{> nav-item nav-link--text='Workloads'}}
  {{/nav-list}}
{{/nav}}
```

### Horizontal subnav overflow
```hbs
{{#>nav
    nav--id='horizontal-subnav-overflow-example'
    nav--HasScroll=true
    nav--IsHorizontal=true
    nav--IsScrollable=true
  }}
  {{#> nav-list}}
    {{> nav-item nav-link--text='Dashboard'}}
    {{> nav-item nav-link--text='Builds'}}
    {{> nav-item nav-link--text='Compute' nav-link--IsCurrent=true}}
    {{> nav-item nav-link--text='Networking'}}
    {{> nav-item nav-link--text='Observe'}}
    {{> nav-item nav-link--text='Operations'}}
    {{> nav-item nav-link--text='Applications'}}
    {{> nav-item nav-link--text='Workloads'}}
  {{/nav-list}}
{{/nav}}
```

### Nav with flyout
```hbs isBeta
{{> nav--flyout nav--flyout--id="nav-flyout-example" nav--flyout--submenu--IsExpanded="true" asdf="asdf"}}
{{> nav--menu--submenu}}
```

### Nav with drilldown menu
```hbs isBeta
{{> nav--drilldown nav--drilldown--id="basic-drilldown-example" menu--Drilldown--HasCurrentMenuItem="true"}}
```

### Nav with drilldown menu level two
```hbs isBeta
{{> nav--drilldown nav--drilldown--id="level-two-drilldown-example" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--menu__content--attribute='style="--pf-v5-c-menu__content--Height: 228px;"' menu--Drilldown--HasCurrentMenuItem="true"}}
```

### Nav with drilldown menu level three
```hbs isBeta
{{> nav--drilldown nav--drilldown--id="level-three-drilldown-example" menu--Drilldown--IsDrilledIn--list-1="true"  menu--Drilldown--IsDrilledIn--list-2="true" menu--Drilldown--menu__content--attribute='style="--pf-v5-c-menu__content--Height: 284px;"' menu--Drilldown--HasCurrentMenuItem="true"}}
```

### Nav link text
When using anything other than a text node for the link text, wrap the link text in an element with `.pf-v5-c-nav__link-text`.

```hbs isBeta
{{#> nav nav--attribute='aria-label="Global"' nav-item--HasTextWrapper=true}}
  {{#> nav-list}}
    {{#> nav-item}}
      {{#> nav-link nav-link--href="#"}}
        Link 1 <i class="fas fa-arrow-right" aria-hidden="true"></i>
      {{/nav-link}}
    {{/nav-item}}
    {{#> nav-item nav-item--IsExpandable="true" nav-item--IsExpanded="true"}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="nav-link-text-link2"'}}
        Link 2 <small>(small text)</small>
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="nav-link-text-link2"'}}
        {{#> nav-list}}
          {{#> nav-item newcontent nav-item--HasTextWrapper=true}}
            {{#> nav-link nav-link--href="#"}}
              <i class="fas fa-user" aria-hidden="true"></i>
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent nav-item--HasTextWrapper=true}}
            {{#> nav-link nav-link--href="#"}}
              <i class="fas fa-user" aria-hidden="true"></i>
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
    {{#> nav-item nav-item--IsExpandable=true nav-item--IsCurrent=true}}
      {{#> nav-link nav-link--href="#" nav-link--attribute='id="nav-link-text-link4"'}}
        Link 3
        <strong>(strong text)</strong>
      {{/nav-link}}
      {{#> nav-subnav nav-subnav--attribute='aria-labelledby="nav-link-text-link4"'}}
        {{#> nav-list}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#" nav-link--IsCurrent=true}}
              Subnav link 2
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Subnav link 3
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-subnav}}
    {{/nav-item}}
  {{/nav-list}}
{{/nav}}
```

## Documentation

### Overview

The navigation system relies on several different sub-components:

* `.pf-v5-c-nav__list` - default navigation list. It is the basis for both default and expandable, vertical navigation.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-v5-c-nav` |  Describes `<nav>` landmark. |
| `aria-label="[section title]"` | `.pf-v5-c-nav__section` |  Describes a nav `<section>`, where a `.pf-v5-c-nav__section-title` is not present. |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-v5-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. |
| `aria-expanded="false"` | `.pf-v5-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-v5-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-v5-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `.pf-v5-c-nav__scroll-button` | Indicates that a scroll button is disabled, when at the first or last item of a list. **Required when disabled** |
| `aria-current="page"` | `.pf-v5-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `aria-haspopup="true"` | `.pf-v5-c-nav__link` | Declares that a nav item has a submenu. |


### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-nav` | `<nav>` | Initiates a primary nav element. |
| `.pf-v5-c-nav__subnav` | `<section>` | Initiates a subnav section. |
| `.pf-v5-c-nav__list` | `<ul>` | Initiates nav list. |
| `.pf-v5-c-nav__item` | `<li>` | Initiates nav list item. |
| `.pf-v5-c-nav__link` | `<a>` | Initiates nav list link. |
| `.pf-v5-c-nav__link-text` | `<span>` | Initiates nav list link text. |
| `.pf-v5-c-nav__section` | `<section>` | Initiates a nav section element. |
| `.pf-v5-c-nav__section-title` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Initiates a nav section title. |
| `.pf-v5-c-nav__toggle` | `<span>` | Initiates the nav toggle wrapper. |
| `.pf-v5-c-nav__toggle-icon` | `<span>` | Initiates a nav toggle icon wrapper. |
| `.pf-v5-c-nav__scroll-button` | `<button>` | Initiates a nav scroll button. **Required for horizontal navs** |
| `.pf-m-horizontal` | `.pf-v5-c-nav` | Modifies nav for the horizontal variation. |
| `.pf-m-horizontal-subnav` | `.pf-v5-c-nav` | Modifies nav for the horizontal subnav variation. |
| `.pf-m-tertiary` | `.pf-v5-c-nav` | Modifies nav for the tertiary variation. |
| `.pf-m-light` | `.pf-v5-c-nav` | Modifies nav for the light variation. **Note: only for use with vertical navs, and requires `.pf-m-light` on the page component's sidebar element (`.pf-v5-c-page__sidebar`)**. |
| `.pf-m-flyout` | `.pf-v5-c-nav__item` | Modifies nav item for the flyout variation. |
| `.pf-m-scrollable` | `.pf-v5-c-nav` | Modifies nav for the scrollable state. |
| `.pf-m-expandable` | `.pf-v5-c-nav__item` | Modifies for the expandable state. |
| `.pf-m-expanded` | `.pf-v5-c-nav__item` | Modifies for the expanded state. |
| `.pf-m-current` | `.pf-v5-c-nav__link` | Modifies for the current state. |
| `.pf-m-hover` | `.pf-v5-c-nav__link` | Modifies for the hover state. |
| `.pf-m-start` | `.pf-v5-c-nav__toggle` | Modifies nav toggle to align left. |
