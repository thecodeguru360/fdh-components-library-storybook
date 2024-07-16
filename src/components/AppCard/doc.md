## APP Card Component

Based on Bootstrap card.

**Required Props**
|Prop |Value(s) |
|--|--|
| title | string |

**Optional Props**
| Prop | Value(s) |
|--|--|
| topMargin | true or false |
| bottomMargin | true or false |
| hasTooltip | true or false |
| tooltipMessage | string |
| hasAction | true or false |
| actionComponent | HTML/React element |

**Examples**

1.  Simple App styled card.

        <AppCard title="Simple Card" topMargin bottomMargin>
            <p>Simple Card Component</p>
        </AppCard>

2.  With Tooltip Message

        <AppCard title="Card Title" hasTooltip tooltipMessage="Message text" topMargin bottomMargin>
        	<p>Card Component with Tooltip</p>
        </AppCard>

3.  With Action Button

        <AppCard title="App Components" topMargin hasAction actionComponent={<AppButton color="info" small square onClick={() =>  console.log("clicked")} > Action </AppButton>} >
        	<p>Card Component with Action button in header</p>
        </AppCard>
