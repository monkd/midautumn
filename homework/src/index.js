import { MidAutumn } from './common';
import './style/main.less';

import $ from "jquery";
import { name } from 'file-loader';


var outputext;
class Game {
    result = [];
    position = [];
    midAutumn = new MidAutumn();

    inputname() {
        console.log(this.midAutumn.inputname());
    }

    start() {
        this.result = this.midAutumn.start();
        console.log(this.midAutumn.getAward());
        this.setDice();
    }

    getPosition() {
        let position = []
        this.position = [1, 2, 3, 4, 5, 6, 7];
        for (let i = 0; i < 6; i++) {
            position.push(this.position.splice(Math.floor(Math.random() * this.position.length), 1)[0])
        }
        return position;
    }

    setDice() {
        $("#bowl").removeClass('active');
        const position = this.getPosition();
        $.each($("#bowl .dice"), (index, item) => {
            $(item).removeClass();
            $(item).addClass(`sprite dice dice${this.result[index]} dice-position${position[index]}`)
        })
        setTimeout(() => {
            $("#bowl").addClass('active');   
        }, 200)
        setTimeout(() => {
            var award;
            award = this.midAutumn.award;
            window.alert(award);
        },1500)
    }
}

$(() => {
    const game = new Game();
    game.inputname();
    $("#startGame").click(() => {
        game.start();
    })
});