## APP DatePicker Component

Custom Date picker component.

**Required Props**
|Prop |Value(s) |
|--|--|
| name | string |

**Optional Props**
| Prop | Value(s) |
|--|--|
| id | string |
| label | string |
| onChange | function |
| value | string |
| disabled | true or false |

**Examples**

1.  Simple Date picker.

        <AppDatePicker name="testDate" label="Test Date" onChange={(v)=>{ console.log(v) }}/>
