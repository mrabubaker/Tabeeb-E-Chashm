import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-measure-pd',
  templateUrl: './measure-pd.component.html',
  styleUrls: ['./measure-pd.component.css']
})
export class MeasurePDComponent implements OnInit {

  // leftEye_xAxis = 1;
  // leftEye_yAxis = 1;
  // rightEye_xAxis = 1;
  // rightEye_yAxis = 1;
  // leftCard_xAxis = 1;
  // leftCard_yAxis = 1;
  // rightCard_xAxis = 1;
  // rightCard_yAxis = 1;

  constructor() { }

  ngOnInit() {

    $(function () {

      var leftEye_xAxis = 1;
      var leftEye_yAxis = 1;
      var rightEye_xAxis = 1;
      var rightEye_yAxis = 1;
      var leftCard_xAxis = 1;
      var leftCard_yAxis = 1;
      var rightCard_xAxis = 1;
      var rightCard_yAxis = 1;
      var difference = 0;
      var value = 0;
      var PD = 0;


      $('.draggableleft').draggable(
        {
          containment: 'parent',
          start: function (event, ui) {
             $(this).css('background-color', 'lightblue');
          },
          drag: function (event, ui) {
            leftEye_xAxis = ui.position.left;
            leftEye_yAxis = ui.position.top;
            PD =(rightEye_xAxis - leftEye_xAxis)/value
            console.log(PD)
            $('h1').html(PD);
            // console.log(this.leftEye_xAxis, this.leftEye_yAxis)
            // $('h1').html(Math.sqrt(Math.pow((rightEye_xAxis - leftEye_xAxis), 2) + Math.pow((rightEye_yAxis - leftEye_yAxis), 2)));
          }
          ,
          stop: function (event, ui) {
            $(this).css('background-color', 'rgba(0, 0, 0, 0)');
          }
        },
        // console.log(leftEye_xAxis, leftEye_yAxis),


        $('.draggableright').draggable(
          {
            containment: 'parent',
            start: function (event, ui) {
              $(this).css('background-color', 'lightblue');
            },
            drag: function (event, ui) {
              rightEye_xAxis = ui.position.left;
              rightEye_yAxis = ui.position.top;
              PD =(rightEye_xAxis - leftEye_xAxis)/value
              console.log(PD)
              $('h1').html(PD);
              // console.log(rightEye_xAxis - leftEye_xAxis)
              // console.log(this.rightEye_xAxis, this.rightEye_yAxis)

              // $('h1').html(Math.sqrt(Math.pow((rightEye_xAxis - leftEye_xAxis), 2) + Math.pow((rightEye_yAxis - leftEye_yAxis), 2)));
            }
            ,
            stop: function (event, ui) {
              $(this).css('background-color', 'rgba(0, 0, 0, 0)');
            }
          },
          console.log(this.rightEye_xAxis, this.leftEye_xAxis),
          $('.cardleft').draggable(
            {
              containment: 'parent',
              start: function (event, ui) {
                $(this).css('background-color', 'lightblue');
              },
              drag: function (event, ui) {
                leftCard_xAxis = ui.position.left;
                leftCard_yAxis = ui.position.top;

                difference = rightCard_xAxis - leftCard_xAxis
                value = difference / 85.6
                // console.log(value)
               
                PD =(rightEye_xAxis - leftEye_xAxis)/value
                console.log(PD)
                $('h1').html(PD);
                // console.log(this.leftCard_xAxis, this.leftCard_yAxis)

                // $('h2').html(Math.sqrt(Math.pow((rightCard_xAxis - leftCard_xAxis), 2) + Math.pow((rightCard_yAxis - leftCard_yAxis), 2)));

              }
              ,
              stop: function (event, ui) {
                $(this).css('background-color', 'black');
              }
            },
            $('.cardright').draggable(
              {
                containment: 'parent',
                start: function (event, ui) {
                  $(this).css('background-color', 'lightblue');
                },
                drag: function (event, ui) {
                  rightCard_xAxis = ui.position.left;
                  rightCard_yAxis = ui.position.top;
                  difference = rightCard_xAxis - leftCard_xAxis
                  value = difference / 85.6
                  // console.log(value)
                 
                  PD =(rightEye_xAxis - leftEye_xAxis)/value
                  console.log(PD)
                  $('h1').html(PD);

                  // $('h2').html(Math.sqrt(Math.pow((rightCard_xAxis - leftCard_xAxis), 2) + Math.pow((rightCard_yAxis - leftCard_yAxis), 2)));

                }
                ,
                stop: function (event, ui) {
                  $(this).css('background-color', 'black');
                }
              },
            )
          )
        )
      );
    },
    );

  }

}
