import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Content } from '../../../src/helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contentListArr:Content[] = [];
  displayMsgCode:number=-2;
  generateContent(id:number,contentArr:(string)[]){
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
  }

  userTitleInputForm = this.formBuilder.group({
    contentTitleField: ''
  });

  onSubmit=()=>{
    if (!this.userTitleInputForm.controls.contentTitleField.value) {
      return;
    }
    this.displayMsgCode = this.contentListArr.findIndex(content=>content.title.toLowerCase()===this.userTitleInputForm.controls.contentTitleField.value?.toLowerCase());
    if(this.displayMsgCode>-1){
      this.contentListArr[this.displayMsgCode].highlight = true;   
      this.scroller.scrollToAnchor(this.contentListArr[this.displayMsgCode].title);   
    }
    setTimeout(() => {
      this.contentListArr[this.displayMsgCode].highlight = false;
      this.displayMsgCode = -2;
    }, 5000);
  }

  constructor(private formBuilder: FormBuilder, private scroller: ViewportScroller){
    this.contentListArr.push({
      ...this.generateContent(
        1,['Virat Kohli','Run Machine Kohli','India']
        ),
        ...{imgURL:'https://www.thestatesman.com/wp-content/uploads/2019/07/Virat-Kohli.jpg'},
        ...{type:'Bating'},
        ...{tags:['Batting']}
      });
    this.contentListArr.push({
      ...this.generateContent(
        2,['Liton Das',`He is a one of the best batsman for bangladesh`,'Bangladesh']
        ),
        ...{type:'Bowling'},
        ...{imgURL:'https://staticg.sportskeeda.com/editor/2020/03/797c3-15830758836732-800.jpg'}
      });
    this.contentListArr.push({
      ...this.generateContent(
        3,['Kevin peterson','highest number of run for england,England']
        ),
        ...{type:'Fielding'},
      });
    this.contentListArr.push({
      ...this.generateContent(
        4,['Gayle',' GayleStrome coming','West Indies']
        ),
        ...{type:'Bowling'},
        ...{imgURL:'https://img.cricketworld.com/images/f-065002/2017-09-24t143327z_1779417312_rc1ad5a14c20_rtrmadp_3_cricket-odi-eng-win.jpg'},
        ...{tags:['Spiner']}
      });
    this.contentListArr.push({
      ...this.generateContent(
        5,['Warner','Makes cool advertisment','Australia']
        )
    });
    this.contentListArr.push({
      ...this.generateContent(
        6,['ABD','Mr. 360','Africa']
        )
    });
    this.contentListArr.push({
      ...this.generateContent(
        7,['Afridi','Bouncer','Pakistan']
        )
    });
    this.contentListArr.push({
      ...this.generateContent(
        8,['Dhoni','Best finisher','India']
        )
    });
  }
}
