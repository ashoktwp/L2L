# Unified 4 - v1.6.3
Unified 4 for the HubSpot CMS by New Breed
=======
Copyright 2024 New Breed - newbreedrevenue.com
Last Updated - 12-4-2024

## Frequently used commands

#### Connect to HubSpot and generate .yml file for portal authentication
```
hs init
```

#### Create a HubDB table
```
hs hubdb create u4-resource-library.json
```

#### Upload entire project
```
hs upload src unified4
```

#### Watch entire project
```
hs watch src unified4
```

#### Fetch entire project with overwriting
```
hs fetch unified4 src -o
```

#### Fetch a specific module add -o to the end to overwrite files
```
hs fetch unified4/modules/u4m-000.module src/modules/u4m-000.module -o
```

hs fetch unified4/modules/u4m-cards-side.module src/modules/u4m-cards-side.module -o

#### Watch entire folder on non-default portal (portal names are set in hubspot.config.yml)
```
hs watch --account=hug_vt src unified4
```

#### Fetch a HubDB table (the numbers are the ID of the table)
```
hs hubdb fetch --account=hugvt 3411413 u4-resource-library.json
```

## Theme fields
New Breed builds custom websites so we don't use theme level fields. For more information on this unused feature visit the link below
https://designers.hubspot.com/docs/tutorials/themes-reference#fields-json

## Requirements
- [Node.js](https://nodejs.org/en/)
- [HubSpot CMS CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

## Useful links
- [CMS CLI Reference](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli)
- [Themes overview documentation](https://designers.hubspot.com/docs/building-blocks/themes)
- [HubL Supported Tags](https://developers.hubspot.com/docs/cms/hubl/tags)
- [Module and theme fields documentation](https://designers.hubspot.com/docs/building-blocks/module-theme-fields)
- [Boilerplate preview website](https://boilerplate.hubspotcms.com)

## Module list
- src/modules/u4m-000.module
- src/modules/u4m-accordion.module
- src/modules/u4m-alternating-content.module
- src/modules/u4m-anchor-nav.module
- src/modules/u4m-animated-stats.module
- src/modules/u4m-banner.module
- src/modules/u4m-blog-listing.module
- src/modules/u4m-blog-post-cards.module
- src/modules/u4m-blog-post-primary-tag.module
- src/modules/u4m-cards-side.module
- src/modules/u4m-cards.module
- src/modules/u4m-cta-row.module
- src/modules/u4m-features-table.module
- src/modules/u4m-filtered-content.module
- src/modules/u4m-footer.module
- src/modules/u4m-form.module
- src/modules/u4m-header.module
- src/modules/u4m-hero.module
- src/modules/u4m-jump-grid.module
- src/modules/u4m-landing-page-classic.module
- src/modules/u4m-landing-page-overlap.module
- src/modules/u4m-landing-page-sign-up.module
- src/modules/u4m-landing-page-split.module
- src/modules/u4m-logo-trust-marks-slick.module
- src/modules/u4m-logo-trust-marks.module
- src/modules/u4m-pricing-cards.module
- src/modules/u4m-quote-cards.module
- src/modules/u4m-rich-text.module
- src/modules/u4m-section-intro.module
- src/modules/u4m-share-page.module
- src/modules/u4m-side-cta.module
- src/modules/u4m-slider-gallery.module
- src/modules/u4m-slider-logo-nav.module
- src/modules/u4m-slider-resource-cards.module
- src/modules/u4m-slider-simple.module
- src/modules/u4m-subscribe.module
- src/modules/u4m-tab-content.module
- src/modules/u4m-team-grid.module
- src/modules/u4m-timeline.module
- src/modules/u4m-video-background.module
