'use strict'

const osc = require('node-osc')

function OscIncome (terminal) {
  this.listningPort = 9000;
  this.server = new osc.Server(this.listningPort, '0.0.0.0')
  this.terminal = terminal;

  this.start = function() {
    this.server.on("message", function (msg, rinfo) {
      if ('write' === msg[0]) {
        terminal.orca.write(msg[2], msg[3], msg[1])
        terminal.update()
      }
    })
  }
}

module.exports = OscIncome
