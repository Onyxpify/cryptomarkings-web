import React from 'react'
import './settrades.scss'

const SetTrades = () => {
  return (
     <div id="setTrades">
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <label htmlFor="max">Max Open Trades</label>
            <input type="number" name="max" id="max" defaultValue={10} />
          </fieldset>
          <fieldset>
            <label htmlFor="profit">Take Profit %</label>
            <input type="number" name="profit" id="profit" defaultValue={1.15} />
          </fieldset>
          <fieldset>
            <label htmlFor="closeTrade">Close Trade %</label>
            <input type="number" name="closeTrade" id="closeTrade" defaultValue={0.15} />
          </fieldset>
        </form>
      </div>
  )
}

export default SetTrades