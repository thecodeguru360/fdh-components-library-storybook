## APP Select Component

Based on App styled select.

**Required Props**
|Prop |Value(s) |
|--|--|
| name | string |
| options | Array[ object{label,value} ] |
| onChange | function |

**Optional Props**
| Prop | Value(s) |
|--|--|
| id | string |
| label | string |
| required | true or false |
| value | object { label,value } |
| disabled | true or false |

**Examples**

1.  Simple Select .

        <AppSelect label="Label" options={options} onChange={(o) =>  console.log(o)} />

2.  Select with selected value.

        <AppSelect label="Label" options={options} value={{ label:  "Second", value:  2 }} onChange={(o) =>  console.log(o)} />
