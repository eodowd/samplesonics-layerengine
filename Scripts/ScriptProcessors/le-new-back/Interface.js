Content.makeFrontInterface(1024, 600);

const var ScriptAudioWaveform3 = Content.getComponent("ScriptAudioWaveform3");

const var ScriptFX1 = Synth.getAudioSampleProcessor("Script FX1");
const var ScriptFX2 = Synth.getAudioSampleProcessor("Script FX2");
const var NUM_BUTTONS = 6;
const var buttons = [];
const var panels = [];

for (i = 0; i < NUM_BUTTONS; i++)
{
    buttons[i] = Content.getComponent("Button" + (i));
    panels[i] = Content.getComponent("Panel" + (i));
    buttons[i].setControlCallback(onButtonControl);
}

inline function onButtonControl(component, value)
{
	local idx = buttons.indexOf(component);
		
	for (i = 0; i < panels.length; i++)
    {
        panels[i].showControl(idx == i);
        buttons[i].setValue(i == idx && value);
    }
	
}


onButtonControl(buttons[0], true);


Engine.loadFontAs("{PROJECT_FOLDER}fonts/Heebo-Light.ttf", "Heebo-Light");
Engine.setGlobalFont("Heebo-Light");


inline function onScriptAudioWaveform3Control(component, value)
{
	Engine.allNotesOff();
	if (ScriptFX1.getSampleLength() < 352800){
		//Console.print("bad");
		ScriptFX1.setAttribute(10, 1);
	
	
	}
	if (ScriptFX1.getSampleLength() >= 352800){
		//Console.print("good");
		ScriptFX1.setAttribute(10, 0);
	
	}
	
};

Content.getComponent("ScriptAudioWaveform3").setControlCallback(onScriptAudioWaveform3Control);


inline function onScriptAudioWaveform4Control(component, value)
{
	Engine.allNotesOff();
	if (ScriptFX2.getSampleLength() < 352800){
	
		//Console.print("bad");
		ScriptFX2.setAttribute(10, 0);
	
	
	}
	if (ScriptFX2.getSampleLength() >= 352800){
		//Console.print("good");
		ScriptFX2.setAttribute(10, 1);
	
	}
};

Content.getComponent("ScriptAudioWaveform4").setControlCallback(onScriptAudioWaveform4Control);


inline function onScriptAudioWaveform2Control(component, value)
{
	Engine.allNotesOff();
};

Content.getComponent("ScriptAudioWaveform2").setControlCallback(onScriptAudioWaveform2Control);


inline function onScriptAudioWaveform2Control(component, value)
{
	Engine.allNotesOff();
};

Content.getComponent("ScriptAudioWaveform2").setControlCallback(onScriptAudioWaveform2Control);

function onNoteOn()
{
if (ScriptFX1.getSampleLength() < 352800){
	//Console.print("bad");
	ScriptFX1.setAttribute(10, 1);


}
if (ScriptFX1.getSampleLength() >= 352800){
	//Console.print("good");
	ScriptFX1.setAttribute(10, 0);

}
if (ScriptFX2.getSampleLength() < 352800){

	//Console.print("bad");
	ScriptFX2.setAttribute(10, 1);


}
if (ScriptFX2.getSampleLength() >= 352800){
	//Console.print("good");
	ScriptFX2.setAttribute(10, 0);

}
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 