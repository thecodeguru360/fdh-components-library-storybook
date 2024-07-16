## APP Button Component

Application styled component with multiple variations/designs available.

**Required Props**
|Prop |Value(s) |
|--|--|
| variant | "primary", "secondary", "tertiary", "primary-sm", "primary-lg", "secondary-sm", "secondary-lg", "tertiary-sm", "tertiary-lg", "icon" |
| rounded | true, false |

**Optional Props**
| Prop | Value(s) |
|--|--|
| disabled | true or false |
| fullWidth | true or false |
|type | "button", "submit" |
| icon | html element |
| text | string |

**Examples**

1.  Simple App styled rounded button.

        <AppButton  variant="primary" type="button" onClick={() => console.log("clicked")}>
        	Button Rounded
        </AppButton>

2.  Button outline in small size

        <AppButton type="submit"  variant="secondary-sm">
        	Button outline
        </AppButton>
