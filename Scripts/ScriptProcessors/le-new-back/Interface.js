Content.makeFrontInterface(1024, 600);

const var ScriptAudioWaveform3 = Content.getComponent("ScriptAudioWaveform3");
Console.print(ScriptAudioWaveform3.getRangeEnd());

const var ScriptFX1 = Synth.getAudioSampleProcessor("Script FX1");
Console.print(ScriptFX1.getSampleLength());
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
	

	
	
};

Content.getComponent("ScriptAudioWaveform3").setControlCallback(onScriptAudioWaveform3Control);


inline function onScriptAudioWaveform4Control(component, value)
{
	Engine.allNotesOff();
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
 