/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Mode2.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 16, 2023
*/

#include "../Engine/Engine.h"
#include "States.h"
#include "Mode2.h"
#include<doodle/doodle.hpp>

Mode2::Mode2() {

}

void Mode2::Load() {
    
}

void Mode2::Update() {
    if (doodle::KeyIsPressed && doodle::Key == doodle::KeyboardButtons::_2)
    {
        Engine::GetGameStateManager().ClearNextGameState();
    }
}

void Mode2::Unload() {

}






