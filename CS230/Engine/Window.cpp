/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Window.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes
Created:    March 8, 2023
*/

#include <doodle/window.hpp>
#include "Window.h"

void CS230::Window::Start(std::string title) {
    doodle::create_window(title, default_width, default_height);
}


void CS230::Window::Update() {
    doodle::update_window();
}