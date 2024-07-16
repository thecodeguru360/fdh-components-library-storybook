## APP Input Component

Based on Bootstrap input.

**Required Props**
|Prop |Value(s) |
|--|--|
| type | "text", "number", "checkbox", "radio" |
| name | string |

**Optional Props**
| Prop | Value(s) |
|--|--|
| id | string |
| label | string |
| required | true or false |
| onChange | function |
| placeholder | string |
| value | string |
| disabled | true or false |
| checked | true or false |

**Examples**

1.  Simple Text Input.

        <AppInput name="testInput" label="Label" type="text" onChange={(o) =>  console.log(o)} />

2.  Checkbox

        <AppInput id="check1" type="checkbox" name="check" label="Checkbox label" />

3.  Radio Button

        <AppInput id="radio1" type="radio" name="radio" value="Yes" label="Radio label"/>
